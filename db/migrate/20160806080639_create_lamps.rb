class CreateLamps < ActiveRecord::Migration
  def change
    create_table :lamps do |t|
    
      t.float :x
      t.float :y
      
      t.timestamps null: false
    end
  end
end
