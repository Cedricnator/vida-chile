import 'dart:convert';

import 'package:flutter/services.dart';
import 'package:mobile/features/campaign/entity/campaign.entity.dart';
import 'package:mobile/features/campaign/repository/campaign.repository.dart';

class DataLocalCampaignRepository implements CampaignRepository{
  
  @override
  Future<List<Campaign>> getCampaigns() async {
    try {
      List<Campaign> campaigns = <Campaign>[];
      final String campignsFile = await rootBundle.loadString('assets/json/campaign.json');

      Map<String, dynamic> campaignMap = json.decode(campignsFile);

      List<dynamic> campaignsObjects = campaignMap['campaigns'];

      campaigns = campaignsObjects.map((e) => Campaign.fromJson(e)).toList();

      return campaigns;
    } catch (e) {
      rethrow;
    }

  }

}