# frozen_string_literal: true

require "rails_helper"

RSpec.describe Operations::AddToWatchList do
  let(:watch_list) { create(:watch_list) }
  let(:tmdb_id) { 37 }

  subject do
    Operations::AddToWatchList.new.call(
      watch_list: watch_list,
      tmdb_id: tmdb_id
    )
  end

  it "creates a Movie record with the supplied tmdb_id" do
    expect { subject }
      .to change { Movie.where(tmdb_id: tmdb_id).count }
      .by(1)
  end

  it "adds the movie to the watch list" do
    expect { subject }
      .to change { watch_list.reload.movies.count }
      .by(1)

    expect(watch_list.movies.last.tmdb_id).to eq(tmdb_id)
  end

  it "creates a UserMovie record" do
    expect { subject }
      .to change { watch_list.user.user_movies.count }
      .by(1)

    expect(watch_list.user.user_movies.last.movie_id).to eq(Movie.last.id)
  end

  describe "when the movie record already exists" do
    let!(:movie) { create(:movie, tmdb_id: tmdb_id) }

    it "does not create a new record" do
      expect { subject }.not_to change { Movie.count }
    end
  end
end
