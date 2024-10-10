

class User {
  final int id;
  final String firstName;
  final String lastName;
  final String gender;
  final String typeBlood;
  final bool enabledToDonate;
  final String commune;
  final int donations;
  final String email;
  
  User({
    required this.id,
    required this.firstName, 
    required this.lastName, 
    required this.gender, 
    required this.typeBlood,
    required this.enabledToDonate,
    required this.commune,
    required this.donations,
    required this.email,
  });
}