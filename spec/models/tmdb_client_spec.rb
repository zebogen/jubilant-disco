# frozen_string_literal: true

require "rails_helper"
require "support/mock_response"

RSpec.describe TmdbClient do
  let(:api_key) { Rails.application.secrets.tmdb_api_key }
  let(:client) { TmdbClient.new }

  describe "#find_by_id" do
    let(:body) { { foo: "bar" } }
    let(:response_code) { 200 }
    let(:headers) { {} }

    let(:mock_response) do
      lambda do |overrides = {}|
        MockResponse.new(
          overrides.reverse_merge(
            code: response_code, body: body.to_json, headers: headers
          )
        )
      end
    end

    before { allow(HTTParty).to receive(:get).and_return(mock_response.call) }

    it "makes a GET request to the correct endpoint" do
      expect(HTTParty).to receive(:get).with("#{TmdbClient::API_BASE_URL}/movie/10?api_key=#{api_key}")
      client.find_by_id(10)
    end

    it "returns parsed JSON" do
      expect(client.find_by_id(10)).to eq body
    end

    context "429 response" do
      let(:response_code) { 429 }
      let(:headers) { { "retry_after" => 0.1 } }

      it "retries 5 times and raises an error" do
        expect(HTTParty).to receive(:get).exactly(5).times
        expect { client.find_by_id(10) }.to raise_error(TmdbClient::RetriesExceededError)
      end

      context "when the last request is successful" do
        before do
          count = 0
          allow(HTTParty).to receive(:get) do
            count += 1
            mock_response.call(count < 5 ? {} : { code: 200 })
          end
        end

        it "retries 4 times and returns the response" do
          expect(HTTParty).to receive(:get).exactly(5).times
          expect(client.find_by_id(10)).to eq body
        end
      end
    end
  end
end
