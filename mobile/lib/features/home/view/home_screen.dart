import 'package:flutter/material.dart';
import 'package:vida_chile_app/common/widgets/nav_bar.dart';
import 'package:vida_chile_app/features/notifications/LocalNotificationsService.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  Future<void> test() async {
    await LocalNotificationsService.showNotification(1, 'testo', 'testo', 'testo');
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      drawer: const NavBar(),
      appBar: AppBar(
        title: const Text("Inicio"),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children:  [
            const Text(
              'Vida Chile',
              style: TextStyle(fontSize: 32, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 16),
            Image.asset('assets/home-1.png'),
            const SizedBox(height: 16),
            const Text(
              '¡Unete a nosotros!',
              style: TextStyle(fontSize: 27),
            ),
            const Text(
              'En Vida Chile prometemos brindar la mejor atencion posible en tu donacion, para nosotros es vital que dones sangre de manera tranquila y segura',
              textAlign: TextAlign.center,
            )
          ]
        ) 
      ),
    );
  }
}
