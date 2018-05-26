class StructCreator
  def self.call(hash)
    new.call(hash)
  end

  def call(hash)
    OpenStruct.new(
      hash.each_with_object({}) do |(key, value), obj|
        obj[key] = parse_value(value)
      end
    )
  end

  private

  def parse_value(value)
    if value.is_a?(Hash)
      call(value)
    elsif value.is_a?(Array)
      value.map { |el| parse_value(el) }
    else
      value
    end
  end
end
