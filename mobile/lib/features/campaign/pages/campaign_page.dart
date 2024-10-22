import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:mobile/common/widgets/nav_bar.dart';
import 'package:mobile/features/campaign/data/local/data_local_campaign_repository.dart';
import 'package:mobile/features/campaign/entity/campaign.entity.dart';

class CampaignPage extends StatelessWidget {
  const CampaignPage({super.key});

  List<Card> _buildGridCards(int count) {
    List<Card> cards = List.generate(count, (int index) {
      return Card(
        clipBehavior: Clip.antiAlias,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            AspectRatio(
              aspectRatio: 18.0 / 11.0,
              child: Image.asset('assets/diamond.png'),
            ),
            const Padding(
              padding: EdgeInsets.fromLTRB(16.0, 12.0, 16.0, 8.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <Widget>[
                  Text('Title'),
                  SizedBox(height: 8.0),
                  Text('Secondary Text'),
                ],
              ),
            ),
          ],
        ),
      );
    });
    return cards;
  }

  List<Card> _buildBloodCampaignCard() {
    List<Campaign> campaigns =
        DataLocalCampaignRepository().getCampaigns() as List<Campaign>;
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
      body: GridView.count(
        crossAxisCount: 1,
        padding: const EdgeInsets.all(16.0),
        childAspectRatio: 8.0 / 9.0,
        children: _buildBloodCampaignCard(),
      )
    );
  }
}
