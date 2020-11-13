class CreateUserDiseases < ActiveRecord::Migration[6.0]
  def change
    create_table :user_diseases do |t|
      t.integer :disease_id
      t.integer :user_id
      t.integer :severity
      t.date :diagnosis_date

      t.timestamps
    end
  end
end
