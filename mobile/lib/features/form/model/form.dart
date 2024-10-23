import 'package:vida_chile_app/features/form/model/page.dart';

class FormModel {
  final List<Page> pages;

  FormModel({required this.pages});

  // Método para convertir un Map (JSON) en una instancia de Formulario
  factory FormModel.fromJson(Map<String, dynamic> json) {
    var pagesJson = json['pages'] as List;
    List<Page> pagesList = pagesJson.map((p) => Page.fromJson(p)).toList();

    return FormModel(
      pages: pagesList,
    );
  }

  // Método para convertir la instancia de Formulario a un Map (JSON)
  Map<String, dynamic> toJson() {
    return {
      'pages': pages.map((p) => p.toJson()).toList(),
    };
  }
}
