class CreateFreckles < ActiveRecord::Migration[6.0]
  def change
    create_table :freckles do |t|
      t.integer :marker_id

      t.timestamps
    end
  end
end
