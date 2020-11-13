class SymptomsRelation < ActiveRecord::Migration[6.0]
  def change
    create_table :symptoms_relation do |t|
      t.integer :user_id
      t.integer :symptom_id
      t.integer :target_condition_id
      t.float :phi_correlation

      t.timestamps
    end
  end
end
