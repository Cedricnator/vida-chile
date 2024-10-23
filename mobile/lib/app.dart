
import 'package:flutter/material.dart';
import 'package:vida_chile_app/features/faq/view/faq_screen.dart';
import 'package:vida_chile_app/features/form/view/form_screen.dart';
import 'package:vida_chile_app/features/home/view/home_screen.dart';

import 'features/campaign/view/campaign_screen.dart';
import 'features/user/view/login.dart';

class VidaChileApp extends StatelessWidget {
  const VidaChileApp({super.key});
  

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: 'Vida Chile',
        initialRoute: '/login',
        debugShowCheckedModeBanner: false,
        routes: { 
          '/login': (BuildContext context) => const LoginPage(),
          '/': (BuildContext context) => const HomeScreen(),
          '/operativos': (BuildContext context) => const CampaignPage(),
          '/preguntas-frecuentes': (BuildContext context) => const FaqPage(),
          '/formulario': (BuildContext context) =>  const FormScreen(),
        },
        theme: ThemeData(
          colorSchemeSeed: const Color.fromARGB(255, 240, 38, 24),
          appBarTheme: AppBarTheme(
              backgroundColor: Colors.red.shade700,
              titleTextStyle: const TextStyle(color: Colors.white)),
        ));
  }
}
