import 'package:flutter/material.dart';

class NavBar extends StatelessWidget {
  const NavBar({super.key});

  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: ListView(
        children: [
          ListTile(
              title: const Text("Home"),
              onTap: () {
                Navigator.pushNamed(context, '/');
              }),
          ListTile(
              title: const Text("Operativos"),
              onTap: () {
                Navigator.pushNamed(context, '/operativos');
              }),
          ListTile(
            title: Text("Preguntas Frecuentes"),
            onTap: () {
              Navigator.pushNamed(context, '/preguntas-frecuentes');
            },
          ),
          //TODO: limit the access to be only from an campaign. delete this bypass
          ListTile(
            title: Text("Formulario"),
            onTap: () {
              Navigator.pushNamed(context, '/formulario');
            },
          )
        ],
      ),
    );
  }
}
