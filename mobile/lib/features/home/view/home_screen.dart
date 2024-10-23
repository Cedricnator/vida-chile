import 'package:flutter/material.dart';
import 'package:vida_chile_app/common/widgets/nav_bar.dart';

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      drawer: NavBar(),
      appBar: AppBar(
        title: Text("Vida Chile"),
      ),
      body: Text("Home"),
    );
  }
}
