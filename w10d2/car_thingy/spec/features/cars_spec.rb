require 'rails_helper'
require 'support/database_cleaner'

RSpec.feature "Cars", type: :feature, js:true do
  # pending "add some scenarios (or delete) #{__FILE__}"
  before :each do
    @car1 = Car.create!(
      make: Make.create!(make: 'Toyota'),
      model: Model.create!(model: 'Prius'),
      style: Style.create!(body_style: 'Extended Cab Pickup'),
      trim: Trim.create!(trim_level: 'XL'),
      year: 1985,
      color: 'Coriander'
    )
  @car2 = Car.create!(
      make: Make.create!(make: 'Toyotaah'),
      model: Model.create!(model: 'Mustang'),
      style: Style.create!(body_style: 'Extended Cab Pickup'),
      trim: Trim.create!(trim_level: 'XL'),
      year: 1985,
      color: 'Coriander'
    )
    @car3 = Car.create!(
      make: Make.create!(make: 'Subaru'),
      model: Model.create!(model: 'BRZ'),
      style: Style.create!(body_style: 'Hatchback'),
      trim: Trim.create!(trim_level: 'XL'),
      year: 1985,
      color: 'Coriander'
    )
  end

  scenario("Visiting the page of cars") do
    visit cars_path
    save_screenshot('car1.png')
    expect(page).to have_text("All My Cars")
  end

  scenario("Should have a car with the models specified") do
    visit cars_path
    save_screenshot('car2.png')
    expect(page).to have_text("Prius")
    expect(page).to have_text("Mustang")
    expect(page).to have_text("BRZ")
  end

  scenario("should have three cars showing") do
    visit cars_path

    expect(page).to have_css(".car", count: 3)
  end

  scenario("clicking on a car should visit said car") do
    visit cars_path
    save_screenshot('car4.png')
    expect(page).to have_css('.car', count: 3)
    click_on 'Prius'
    # first(:link, "Click me").click
    sleep(1)
    save_screenshot('car5.png')
    expect(page).to have_css('.car', count: 1)
  end

end
