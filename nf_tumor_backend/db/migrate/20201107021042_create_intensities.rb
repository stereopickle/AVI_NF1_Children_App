class CreateIntensities < ActiveRecord::Migration[6.0]
  def change
    create_table :intensities do |t|
      t.string :intensity_name

      t.timestamps
    end
  end
end
