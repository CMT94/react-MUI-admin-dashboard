import React from "react";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";

import Header from "../../components/Header";

import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { ExpandMore } from "@mui/icons-material";

const faqDemoData = [
  {
    id: "faq1",
    title: "Important Question #1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: "faq2",
    title: "Important Question #2",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor labore necessitatibus eius non vero debitis pariatur tempora asperiores, illum quis sit doloremque odit iure fugit id deserunt obcaecati aut exercitationem!",
  },
  {
    id: "faq3",
    title: "Important Question #3",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor labore necessitatibus eius non vero debitis pariatur tempora asperiores, illum quis sit doloremque odit iure fugit id deserunt obcaecati aut exercitationem! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor labore necessitatibus eius non vero debitis pariatur tempora asperiores, illum quis sit doloremque odit iure fugit id deserunt obcaecati aut exercitationem!",
  },
  {
    id: "faq4",
    title: "Important Question #4",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa repellat distinctio odit, numquam quae dolorem a accusamus fugit provident voluptatibus deserunt ipsum? Quisquam, assumenda maxime aliquam laborum quo autem quibusdam fuga dolores explicabo ut debitis quas magnam ducimus possimus hic iure odit dolor? Facere, ab.",
  },
  {
    id: "faq5",
    title: "Important Question #5",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eum assumenda eos. Molestias ducimus magnam earum. Saepe modi eius doloribus distinctio qui voluptas, ipsum nam porro. Doloribus libero vero incidunt nemo nam impedit eum nihil delectus nobis quod corporis, rerum quasi repellendus rem sit fugit adipisci! Ipsum reiciendis voluptates neque nobis, distinctio ea at dignissimos officia aliquam consequatur. Sint, a!",
  },
];
const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      {faqDemoData.map((faq) => (
        <Accordion key={faq.id} defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              {faq.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.desc}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQ;
