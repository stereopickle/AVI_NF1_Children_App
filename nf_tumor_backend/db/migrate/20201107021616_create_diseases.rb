class CreateDiseases < ActiveRecord::Migration[6.0]
  def change
    create_table :diseases do |t|
      t.string :disease_name

      t.timestamps
    end
  end
end
