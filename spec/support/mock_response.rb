class MockResponse
  attr_reader :code, :headers, :body

  def initialize(code:, headers: {}, body: "{}")
    @code = code
    @headers = headers
    @body = body
  end

  def ok?
    code == 200
  end

  def parsed_response
    JSON.parse(body)
  end
end
