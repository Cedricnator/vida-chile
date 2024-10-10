import 'package:mobile/features/user/domain/entities/user.dart';

abstract class UserRepository {
  Future<User> getUsers(int id);
}