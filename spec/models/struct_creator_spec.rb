# frozen_string_literal: true

require "rails_helper"

RSpec.describe StructCreator do
  describe "#call" do
    let(:hash) do
      {
        key_1: {
          foo: 1,
          bar: {
            bar_foo: 2,
            bar_bar: ["foo"]
          }
        },
        key_2: "foo",
        key_3: [
          { array_hash: true },
          %w[key_3_array_1 key_3_array_2]
        ],
        key_4: 9
      }
    end

    let(:result) { StructCreator.new.call(hash) }

    it "recursively converts hashes to structs" do
      expect(result.key_1).to be_a OpenStruct
      expect(result.key_1.bar).to be_a OpenStruct
    end

    it "recursively converts hashes inside arrays" do
      expect(result.key_3[0]).to be_a OpenStruct
      expect(result.key_3[0].array_hash).to eq true
      expect(result.key_3[1]).to eq %w[key_3_array_1 key_3_array_2]
    end

    it "leaves other types as-is" do
      expect(result.key_1.foo).to eq 1
      expect(result.key_1.bar.bar_foo).to eq 2
      expect(result.key_1.bar.bar_bar).to eq ["foo"]
      expect(result.key_2).to eq "foo"
      expect(result.key_4).to eq 9
    end
  end
end
