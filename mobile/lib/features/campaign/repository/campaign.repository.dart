
import 'package:mobile/features/campaign/entity/campaign.entity.dart';

abstract class CampaignRepository{
  Future<List<Campaign>> getCampaigns();
}