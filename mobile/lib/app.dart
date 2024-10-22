import 'package:flutter/material.dart';
import 'package:mobile/features/campaign/pages/campaign_page.dart';
import 'package:mobile/features/faq/view/faq_screen.dart';

class VidaChileApp extends StatelessWidget {
  const VidaChileApp({super.key});
  
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Vida Chile',
      initialRoute: '/',
      routes: {
        '/': (BuildContext context) => const CampaignPage(),
        '/preguntas-frecuentes': (BuildContext context) => const FaqPage(),
      },
      theme: ThemeData(
        colorSchemeSeed: const Color.fromARGB(255, 240, 38, 24),
        appBarTheme: AppBarTheme(
          backgroundColor: Colors.red.shade700,
          titleTextStyle: const TextStyle(color: Colors.white)
        ),
      )
    );
  }
  
}