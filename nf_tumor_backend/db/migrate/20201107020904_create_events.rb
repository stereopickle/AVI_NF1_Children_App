class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.integer :user_id
      t.integer :event_type_id
      t.integer :body_location_id
      t.string :intensity
      t.datetime :event_date_time

      t.timestamps
    end
  end
end
