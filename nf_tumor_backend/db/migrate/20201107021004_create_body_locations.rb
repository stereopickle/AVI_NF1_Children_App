class CreateBodyLocations < ActiveRecord::Migration[6.0]
  def change
    create_table :body_locations do |t|
      t.integer :section
      t.integer :sub_section

      t.timestamps
    end
  end
end
