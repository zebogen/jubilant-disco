# frozen_string_literal: true

class SessionsController < Devise::SessionsController
  def new
    render "home/index"
  end
end
