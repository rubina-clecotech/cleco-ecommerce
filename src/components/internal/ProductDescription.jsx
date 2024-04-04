import React from "react";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box, Button, Card, Collapse, Tab, Typography } from "@mui/material";

const ProductDescription = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <Box className="product-description-container">
        <Typography className="heading">Product Description</Typography>
        <Card className="content-card mt-18">
          <TabContext value={value}>
            <Box className="tab-header">
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Description" value="1" className="tabs" />
                <Tab label="Ingredients" value="2" className="tabs" />
                <Tab label="How To Use" value="3" className="tabs" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <Box className="tab-content1">
                <Typography className="text">
                  The No.4 Bond Maintenance Shampoo, infused with patented
                  OLAPLEX Bond Building Technology, is a highly concentrated
                  reparative shampoo that hydrates and nourishes hair.
                </Typography>
                <Typography className="title mt-10">Features:</Typography>
                <ul className="list-container">
                  <li className="text">
                    No. 4 Bond Maintenance Shampoo improves manageability and
                    softness
                  </li>
                  <li className="text">
                    Increases shine and leaves hair looking healthier
                  </li>
                  <li className="text">
                    Helps prevent breakage and split ends
                  </li>
                </ul>
                <Collapse in={expanded}>
                  <Box className="collapsible-content">
                    <Typography className="title">
                      About the Brand :
                      <span className="text">
                        {" "}
                        The original, patented, proven molecular technology that
                        repairs and strengthens the hair. Relinks broken bonds
                        found deep within the hair structure to dramatically
                        improve hair health, strength, and integrity. Repairs
                        the hair from the inside out. Patented Bond Building
                        technology with highly concentrated formulas, Olaplex is
                        suitable for all hair types and hair textures. Protects
                        from 5 types of hair damage: Chemical damage, heat
                        damage, mechanical damage, pollution damage, and
                        environmental damage.
                      </span>
                    </Typography>
                    <Typography className="title mt-18">
                      Expiry Date: 15 August 2026
                    </Typography>
                    <Typography className="title">
                      Country of Origin :
                      <span className="text"> United States of America</span>
                    </Typography>
                    <Typography className="title mt-18">
                      Manufacturer :<span className="text"> Olaplex</span>
                    </Typography>
                    <Typography className="title">
                      Address :
                      <span className="text">
                        {" "}
                        Olaplex Inc. 1187 Coast Village Road, Suite 1-520 Santa
                        Barbara, CA 93108
                      </span>
                    </Typography>
                    <Typography className="title mt-18">
                      Importer :
                      <span className="text"> FSN Brand Marketing Pvt Ltd</span>
                    </Typography>
                    <Typography className="title">
                      Address :
                      <span className="text">
                        {" "}
                        A-1, 135 SHAH & NAHAR INDUSTRIAL ESTATE SJ MARG,LOWER
                        PAREL LOWER PAREL, Mumbai- 400013
                      </span>
                    </Typography>
                  </Box>
                </Collapse>
                <Box className="mt-18 center read-more-box">
                  <Button
                    className="read-btn"
                    onClick={handleExpandClick}
                    disableRipple
                  >
                    {expanded ? "Read Less" : "Read More"}
                  </Button>
                </Box>
              </Box>
            </TabPanel>
            <TabPanel value="2">
              <Box>
                <Typography className="text">
                Water (Aqua/Eau), Sodium Lauroyl Methyl Isethionate,
                Cocamidopropyl Hydroxysultaine, Potassium Cocoyl Glycinate,
                Disodium Cocoyl Glutamate, Sodium Lauroyl Sarcosinate, Potassium
                Cocoate, Decyl Glucoside, Glycereth-26, Bis-Aminopropyl Diglycol
                Dimaleate, Cocamidopropylamine Oxide, Disodium Laureth
                Sulfosuccinate, Glycol Distearate, Sodium Cocoyl Glutamate,
                Methyl Gluceth-20, Acrylates Copolymer, PEG-120 Methyl Glucose
                Dioleate, Amodimethicone, Citric Acid, Sodium Lauryl
                Sulfoacetate, Polyquaternium-10, Ethylhexylglycerin,
                DivinylDimethicone/Dimethicone Copolymer, Polyquaternium-11,
                Trisodium Ethylenediamine Disuccinate, Guar
                Hydroxypropyltrimonium Chloride, C11-15 Pareth-7, Laureth-9,
                Glycerin, Trideceth-12, C12-13 Pareth-23, C12-13 Pareth-3,
                Hydrolyzed Vegetable Protein, PG-Propyl Silanetriol, Panthenol,
                Acetic Acid, Tetrasodium EDTA, Pentasodium Triphosphate, Sodium
                Hydroxide, Disodium EDTA, Helianthus Annus (Sunflower) Seed Oil,
                Tocopherol, Prunus Armeniaca (Apricot) Kernel Oil, Pseudozyma
                Epicola/Camellia Sinensis Seed Oil Ferment Extract Filtrate,
                Pseudozyma Epicola/Argania Spinosa Kernel Oil Ferment Filtrate,
                Quaternium-95, Propanediol, Helianthus Annus (Sunflower) Seed
                Extract, PEG-8, Euterpe Oleracea Fruit Extract, Punica Granatum
                Extract, Rosemarinus Officinalis (Rosemary) Leaf Extract, Musa
                Sapientum (Banana) Fruit Extract, Origanum Vulgare Lear Extract,
                Morinda Citrifolia Fruit Extract, Articum Lappa Root Extract,
                PEG-8/SMDI Copolymer, Sodium Hyaluronate, Palmitoyl Myristyl
                Serinate, Sodium Polyacrylate, Pentaerythrityl Tetra-Di-T-Butyl
                Hydroxyhydrocinnamate, Biotin, Benzoic Acid, Phenoxyethanol,
                Chlorphenesin, Potassium Sorbate, Sodium Benzoate,
                Fragrance(Parfum), Citral, Hexyl Cinnamal, Limonene.
                </Typography>
              </Box>
            </TabPanel>
            <TabPanel value="3">
                <ul>
                    <li className="text">Dispense desired amount of product into hands and emulsify.</li>
                    <li className="text">Apply to wet hair, focusing on the scalp and working through to ends.</li>
                    <li className="text">Rinse.</li>
                    <li className="text">For best results, follow with Olaplex No.5 Bond Maintenance Conditioner.</li>
                </ul>
            </TabPanel>
          </TabContext>
        </Card>
      </Box>
    </>
  );
};

export default ProductDescription;
