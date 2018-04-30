class AccessorHash
  def initialize(hash)
    @hash = hash
    parse_hash!
  end

  delegate :[], to: :hash

  private

  attr_reader :hash

  def parse_hash!
    values = {}
    hash.each do |(key, value)|
      values[key] = parse_value(value)
      AccessorHash.instance_eval do
        define_method(key) { values[key] }
      end
    end
  end

  def parse_value(value)
    if value.is_a?(Hash)
      AccessorHash.new(value)
    elsif value.is_a?(Array)
      value.map { |el| parse_value(el) }
    else
      value
    end
  end
end
