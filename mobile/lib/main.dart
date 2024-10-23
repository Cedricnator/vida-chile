import 'package:flutter/material.dart';
import 'app.dart';
import 'features/notifications/LocalNotificationsService.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await LocalNotificationsService.init();
  runApp(const VidaChileApp());
}



