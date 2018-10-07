# frozen_string_literal: true

source "https://rubygems.org"

ruby "2.4.4"

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem "devise"
gem "graphql"
gem "httparty"
gem "pg", "~> 0.18"
gem "puma", "~> 3.7"
gem "rails", "~> 5.1.4"
gem "react_on_rails", "~> 9.0.1"
gem "sass-rails", "~> 5.0"
gem "sidekiq"
gem "webpacker"

group :development, :test do
  gem "byebug", platforms: %i[mri mingw x64_mingw]
  gem "capybara", "~> 2.13"
  gem "factory_bot"
  gem "rspec-rails", "~> 3.6"
  gem "selenium-webdriver"
end

group :development do
  gem "graphiql-rails"
  gem "listen", ">= 3.0.5", "< 3.2"
  gem "rubocop", "~> 0.56.0", require: false
  gem "spring"
  gem "spring-watcher-listen", "~> 2.0.0"
  gem "web-console", ">= 3.3.0"
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: %i[mingw mswin x64_mingw jruby]

gem "mini_racer", platforms: :ruby
