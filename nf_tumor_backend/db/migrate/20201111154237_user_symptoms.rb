class UserSymptoms < ActiveRecord::Migration[6.0]
  def change
    create_table :user_symptoms do |t|
      t.integer :user_id
      t.integer :symptom_id
      t.boolean :current

      t.timestamps
    end
  end
end
