class CreateBarbaries < ActiveRecord::Migration
  def change
    create_table :barbaries do |t|
      
      t.float :x
      t.float :y
      t.string :title
      t.text :message
      t.integer :crime
      t.integer :password
      t.integer :barbary_id
      
      t.timestamps null: false
    end
  end
end
