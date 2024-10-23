import 'package:flutter/material.dart';
import 'package:vida_chile_app/common/widgets/nav_bar.dart';
import 'package:vida_chile_app/features/campaign/models/campaign.dart';
import 'package:vida_chile_app/features/campaign/repository/campaign_repository.dart';

class CampaignPage extends StatelessWidget {
  const CampaignPage({super.key});


Widget _buildStatusLabel(StateCampaign state) {
  Color color;
  String text;

  print(state);
  switch (state) {
    case StateCampaign.current:
      color = Colors.green;
      text = 'en curso';
      break;
    case StateCampaign.soon:
      color = const Color.fromARGB(255, 168, 154, 26);
      text = 'proximo';
      break;
    case StateCampaign.finalized:
      color = Colors.red;
      text = 'finalizado';
      break;
    default:
      color = Colors.grey;
      text = 'cancelado';
  }

  return Container(
    padding: const EdgeInsets.symmetric(horizontal: 8.0, vertical: 4.0),
    decoration: BoxDecoration(
      color: color,
      borderRadius: BorderRadius.circular(12.0),
    ),
    child: Text(
      text,
      style: const TextStyle(color: Colors.white, fontWeight: FontWeight.bold),
    ),
  );
}

  List<Container> _buildBloodCampaignCard() {
    List<Campaign> campaigns = CampaignRepository.loadCampaigns();
    return campaigns.map((campaign) {
      return Container(
        margin: const EdgeInsets.all(8.0),
        decoration: BoxDecoration(
          border: Border.all(color: Colors.grey, width: 1.0),
          borderRadius: BorderRadius.circular(22.0),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text(
                    campaign.donationCenterName,
                    style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16.0),
                  ),
                  _buildStatusLabel(campaign.stateCampaign) 
                ]
              ),
            ),
            Expanded(
              child: Padding(
                padding: const EdgeInsets.fromLTRB(10.0, 10.0, 16.0, 14.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text("Horario: ${campaign.startHour} - ${campaign.finalHour}"),
                    Text(campaign.city),
                    Text(campaign.adress),
                  ],
                ),
              ),
            ),
          ],
        ),
      );
    }).toList();
  }

  @override
 Widget build(BuildContext context) {
    return Scaffold(
      drawer: const NavBar(),
      appBar: AppBar(
        title: const Text('Vida Chile'),
      ),
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(20.0),
            child: TextField(
              decoration: InputDecoration(
                contentPadding: const EdgeInsets.symmetric(vertical: 15.0),
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(30.0),
                  borderSide: const BorderSide(width: 0.8),
                ),
                hintText: 'Buscar',
                prefixIcon: const Icon(
                  Icons.search,
                  size: 30.0,
                ),
              ),
            ),
          ),
          Expanded(
            child: GridView.count(
              crossAxisCount: 1,
              padding: const EdgeInsets.all(16.0),
              childAspectRatio: 22.0 / 9.0,
              children: _buildBloodCampaignCard(),
            ),
          ),
        ],
      ),
    );
  }
}
