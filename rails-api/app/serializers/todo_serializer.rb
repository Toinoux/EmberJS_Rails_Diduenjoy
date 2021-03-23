class TodoSerializer < ActiveModel::Serializer
  attributes :id, :title, :done
end
