class StaffSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :email, :fullname, :position
end
