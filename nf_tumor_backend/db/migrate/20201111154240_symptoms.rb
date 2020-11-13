class Symptoms < ActiveRecord::Migration[6.0]
  def change
    create_table :symptoms do |t|
      t.string :name
      t.boolean :target
      t.string :description

      t.timestamps
    end
  end
end
