class AccessorHash
  def initialize(hash)
    @hash = hash
    parse_hash!
  end

  delegate :[], to: :hash

  private

  attr_reader :hash

  def parse_hash!
    hash.each do |(key, value)|
      AccessorHash.instance_eval do
        define_method(key) { parse_value(value) }
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
