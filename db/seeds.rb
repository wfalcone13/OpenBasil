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
rest_1 = Restaurant.new({name: 'Lilia', category: 'New Italian', long: 40.717558, lad: -73.952730, location: '567 Union Ave, Brooklyn, NY 11222', price: 7, rating: 5, review_count: 120 })
rest_2 = Restaurant.new({name: 'Best Pizza', category: 'Pizza', long: 40.715573, lad: -73.953513, location: '33 Havemeyer St, Brooklyn, NY 11211', price: 1, rating: 5, review_count: 300  })
rest_3 = Restaurant.new({name: 'Naked Dog', category: 'Northern Italian' , long: 40.731220, lad: -73.959429, location: '47 Java St, Brooklyn, NY 11222', price: 6, rating: 3, review_count: 90  })
rest_4 = Restaurant.new({name: 'Brano', category: 'New Italian', long: 40.710734, lad: -73.967502, location: '26 Broadway, Brooklyn, NY 11249', price: 7, rating: 3, review_count: 220  })
rest_5 = Restaurant.new({name: "Joe's Pizza", category: 'Pizza', long: 40.73363, lad: -73.98744, location: "150 E 14th St, New York, NY 10003", price: 1, rating: 5, review_count: 500 })


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


