# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

rest_1 = Restaurant.create({name: 'LiliaB', category: 1, long: 40.717558, lad: -73.952730, location: '567 Union Ave, Brooklyn, NY 11222' })
rest_2 = Restaurant.create({name: 'Best PizzaB', category: 2, long: 40.715573, lad: -73.953513, location: '33 Havemeyer St, Brooklyn, NY 11211' })
rest_3 = Restaurant.create({name: 'Naked DogB', category: 3, long: 40.731220, lad: -73.959429, location: '47 Java St, Brooklyn, NY 11222' })
rest_4 = Restaurant.create({name: 'BranoB', category: 4, long: 40.710734, lad: -73.967502, location: '26 Broadway, Brooklyn, NY 11249' })