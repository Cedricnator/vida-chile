import 'package:flutter_local_notifications/flutter_local_notifications.dart';
//import 'package:flutter_local_notifications_example/main.dart';
//import 'package:flutter/material.dart';

class LocalNotificationsService {
  static final LocalNotificationsService _notificationService =
      LocalNotificationsService._internal();
  factory LocalNotificationsService() {
    return _notificationService;
  }

  static final AndroidNotificationDetails _androidNotificationDetails =
      AndroidNotificationDetails(
    "1",
    "cuchas",
    channelDescription:
        "This channel is responsible for all the local notifications",
    playSound: true,
    priority: Priority.high,
    importance: Importance.high,
  );

  static final NotificationDetails notificationDetails = NotificationDetails(
    android: _androidNotificationDetails,
  );

  static final FlutterLocalNotificationsPlugin flutterLocalNotificationsPlugin =
      FlutterLocalNotificationsPlugin();

  LocalNotificationsService._internal();

  static Future<void> init() async {
    final FlutterLocalNotificationsPlugin flutterLocalNotificationsPlugin =
        FlutterLocalNotificationsPlugin();

    final AndroidInitializationSettings androidInitializationSettings =
        AndroidInitializationSettings("app_icon");

    final InitializationSettings initializationSettings =
        InitializationSettings(android: androidInitializationSettings
            //iOS: iOSInitializationSettings,
            );
    await flutterLocalNotificationsPlugin.initialize(
      initializationSettings,
    );
  }

  static Future<void> showNotification(
      int id, String title, String body, String payload) async {
    await flutterLocalNotificationsPlugin.show(
      id,
      title,
      body,
      notificationDetails,
      payload: payload,
    );
  }

  // final IOSInitializationSettings iOSInitializationSettings =
  //     IOSInitializationSettings(
  //   defaultPresentAlert: false,
  //   defaultPresentBadge: false,
  //   defaultPresentSound: false,
  // );

  Future<void> onSelectNotification(String? payload) async {
    //todo!
  }
}
