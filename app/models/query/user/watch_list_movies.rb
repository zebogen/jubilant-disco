# frozen_string_literal: true

module Query
  module User
    class WatchListMovies
      def call(user_id)
        WatchListMovie
          .joins(watch_list: :user)
          .where(watch_lists: { users: { id: user_id } })
      end
    end
  end
end
