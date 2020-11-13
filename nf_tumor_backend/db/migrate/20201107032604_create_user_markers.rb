class CreateUserMarkers < ActiveRecord::Migration[6.0]
  def change
    create_table :user_markers do |t|
      t.integer :marker_id
      t.integer :user_id
      t.integer :body_location_id

      t.timestamps
    end
  end
end
