# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# file1 = EzDownload.open('/Users/william_falcone/Desktop/rest_pics/lilia.jpeg')
# rest_1.photo.attach(io: file1, filename: 'lilia.jpeg')
# rest_1.save!


Restaurant.destroy_all
rest_1 = Restaurant.new({name: 'Lilia', category: 'Pasta', long: 40.717558, lad: -73.952730, location: '567 Union Ave, Brooklyn, NY 11222', price: 7, rating: 5, review_count: 120 })
rest_2 = Restaurant.new({name: 'Best Pizza', category: 'Pizza', long: 40.715573, lad: -73.953513, location: '33 Havemeyer St, Brooklyn, NY 11211', price: 1, rating: 5, review_count: 300  })
rest_3 = Restaurant.new({name: 'Naked Dog', category: 'Pasta' , long: 40.731220, lad: -73.959429, location: '47 Java St, Brooklyn, NY 11222', price: 6, rating: 3, review_count: 90  })
rest_4 = Restaurant.new({name: 'Barano', category: 'Pasta', long: 40.710734, lad: -73.967502, location: '26 Broadway, Brooklyn, NY 11249', price: 7, rating: 3, review_count: 220  })
rest_5 = Restaurant.new({name: "Joe's Pizza", category: 'Pizza', long: 40.73363, lad: -73.98744, location: "150 E 14th St, New York, NY 10003", price: 1, rating: 5, review_count: 500 })
rest_6 = Restaurant.new({name: "Via Carota", category: 'Pasta', long: 40.73363, lad: -73.98744, location: "51 Groove St, New York, NY 10014", price: 4, rating: 5, review_count: 280 })
rest_7 = Restaurant.new({name: "Johns of 12th Street", category: 'Red Sauce', long: 40.73363, lad: -73.98744, location: "302 E 12th St, New York, NY 10003", price: 4, rating: 5, review_count: 19 })
rest_8 = Restaurant.new({name: "Bar Primi", category: 'Pasta', long: 40.73363, lad: -73.98744, location: "325 Bowery, New York, NY 10003", price: 7, rating: 5, review_count: 80 })
rest_9 = Restaurant.new({name: "Sorbillo NYC", category: 'Pizza', long: 40.73363, lad: -73.98744, location: "334 Bowery, New York, NY 10012", price: 4, rating: 3, review_count: 2 })
rest_10 = Restaurant.new({name: "Rubirosa", category: 'Pizza', long: 40.73363, lad: -73.98744, location: "235 Mulberry St, New York, NY 10012", price: 3, rating: 5, review_count: 100 })
rest_11 = Restaurant.new({name: "Misi", category: 'Pasta', long: 40.73363, lad: -73.98744, location: "329 Kent Ave, Brooklyn, NY 11249", price: 7, rating: 4, review_count: 200 })
rest_12 = Restaurant.new({name: "Robertas", category: 'Pizza', long: 40.73363, lad: -73.98744, location: "261 Moore St, Brooklyn, NY 11206", price: 3, rating: 3, review_count: 12 })


file1 = EzDownload.open('https://s3.amazonaws.com/open-basil-dev/lilia.jpeg')
rest_1.photo.attach(io: file1, filename: 'lilia.jpeg')
rest_1.save!

file2 = EzDownload.open('https://s3.amazonaws.com/open-basil-dev/best_pizza.jpeg')
rest_2.photo.attach(io: file2, filename: 'best_pizza.jpeg')
rest_2.save!

file3 = EzDownload.open('https://s3.amazonaws.com/open-basil-dev/naked_dog.jpeg')
rest_3.photo.attach(io: file3, filename: 'naked_dog.jpeg')
rest_3.save!

file4 = EzDownload.open('https://s3.amazonaws.com/open-basil-dev/barano.jpeg')
rest_4.photo.attach(io: file4, filename: 'barano.jpeg')
rest_4.save!


file5 = EzDownload.open('https://s3.amazonaws.com/open-basil-dev/joessm.jpg')
rest_5.photo.attach(io: file5, filename: 'joessm.jpg')
rest_5.save!

file7 = EzDownload.open('https://s3.amazonaws.com/open-basil-dev/newrest/john_s.0.0.jpg')
rest_7.photo.attach(io: file7, filename: 'john_s.0.0.jpg')
rest_7.save!

file8 = EzDownload.open('https://s3.amazonaws.com/open-basil-dev/newrest/Screen_Shot_2018_03_02_at_1.25.00_PM.0.0.png')
rest_8.photo.attach(io: file8, filename: 'Screen_Shot_2018_03_02_at_1.25.00_PM.0.0.png')
rest_8.save!

file9 = EzDownload.open('https://s3.amazonaws.com/open-basil-dev/newrest/sorbillo.jpg')
rest_9.photo.attach(io: file9, filename: 'sorbillo.jpg')
rest_9.save!


file10 = EzDownload.open('https://s3.amazonaws.com/open-basil-dev/newrest/ruby.jpg')
rest_10.photo.attach(io: file10, filename: 'ruby.jpg')
rest_10.save!


file11 = EzDownload.open('https://s3.amazonaws.com/open-basil-dev/newrest/misi.jpg')
rest_11.photo.attach(io: file11, filename: 'misi.jpg')
rest_11.save!

file6 = EzDownload.open('https://s3.amazonaws.com/open-basil-dev/newrest/via_car.jpeg')
rest_6.photo.attach(io: file6, filename: 'via_car.jpeg')
rest_6.save!

file12 = EzDownload.open('https://s3.amazonaws.com/open-basil-dev/newrest/roberts.jpeg')
rest_12.photo.attach(io: file12, filename: 'roberts.jpeg')
rest_12.save!




