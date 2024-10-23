import 'package:flutter/material.dart';
import 'package:vida_chile_app/common/widgets/nav_bar.dart';
import 'package:vida_chile_app/features/campaign/models/campaign.dart';
import 'package:vida_chile_app/features/campaign/repository/campaign_repository.dart';

class CampaignPage extends StatelessWidget {
  const CampaignPage({super.key});


  List<Card> _buildBloodCampaignCard() {
    List<Campaign> campaigns = CampaignRepository.loadCampaigns();
    return campaigns.map((campaign) {
      return Card(
        clipBehavior: Clip.antiAlias,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(campaign.donationCenterName),
            Expanded(
                child: Padding(
              padding: const EdgeInsets.fromLTRB(16.0, 12.0, 16.0, 8.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                      "Horario: ${campaign.startHour} - ${campaign.finalHour} "),
                  Text(campaign.city),
                  Text(campaign.adress),
                ],
              ),
            )),
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
              childAspectRatio: 8.0 / 9.0,
              children: _buildBloodCampaignCard(),
            ),
          ),
        ],
      ),
    );
  }
}
