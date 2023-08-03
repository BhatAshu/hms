const express = require("express");
const router = express.Router();
const bloodModel = require("../models/blood");
const dispatchModel = require("../models/dispatchblood");
const authenticate = require("../middleware/authentication");

router.get("/", authenticate, async (req, res) => {
  try {
    // Aggregate blood donations by blood group
    const bloodDonations = await bloodModel.aggregate([
      {
        $group: {
          _id: "$bloodgroup",
          totalBags: { $sum: "$noofbags" },
        },
      },
    ]);

    // Aggregate blood dispatches by blood group
    const bloodDispatches = await dispatchModel.aggregate([
      {
        $group: {
          _id: "$bloodgroup",
          totalDispatches: { $sum: "$noofbags" },
        },
      },
    ]);

    // Create a dictionary to store the number of bags available
    const bloodBanks = {};

    // Populate the dictionary with blood donations
    bloodDonations.forEach((donation) => {
      const bloodgroup = donation._id;
      const totalDonations = donation.totalBags;
      const totalDispatches =
        bloodDispatches.find((dispatch) => dispatch._id === bloodgroup)
          ?.totalDispatches || 0;

      // if (bloodgroup === "B-") {
      //   availableBags++; // Increment available bags by 1
      // }

      const availableBags = totalDonations - totalDispatches;
      bloodBanks[bloodgroup] = availableBags >= 0 ? availableBags : 0;
    });

    return res.status(200).json(bloodBanks);
  } catch (error) {
    console.error(error);
    // return res.status(500).json({ error: "Internal Server Error" });
    return res.status(500).json( error.stack );
  }
});

module.exports = router;
