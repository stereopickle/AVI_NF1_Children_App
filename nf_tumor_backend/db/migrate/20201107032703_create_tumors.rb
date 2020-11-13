class CreateTumors < ActiveRecord::Migration[6.0]
  def change
    create_table :tumors do |t|
      t.integer :marker_id
      t.boolean :has_dimensions
      t.integer :diameter
      t.integer :estimated_weight

      t.timestamps
    end
  end
end
