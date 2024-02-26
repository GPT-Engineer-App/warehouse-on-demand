import React from "react";
import { Box, Button, Container, Flex, Heading, Icon, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { FaTruckMoving, FaPlusCircle, FaClipboardList } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Stack spacing={10}>
        <Header />
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <CallToActionSection />
        <Footer />
      </Stack>
    </Container>
  );
};

const Header = () => {
  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Heading as="h1" size="xl" letterSpacing="tighter">
        Tu Almacén Personal
      </Heading>
      <Button colorScheme="teal" size="md">
        Contacto
      </Button>
    </Flex>
  );
};

const HeroSection = () => {
  return (
    <Flex direction={{ base: "column", md: "row" }} align="center" justify="center" wrap="wrap" spacing={10}>
      <Box flex="1" mb={{ base: 5, md: 0 }}>
        <Heading as="h2" size="2xl" fontWeight="bold">
          Almacenamiento Fácil y Flexible
        </Heading>
        <Text mt={4} fontSize="lg" color={useColorModeValue("gray.600", "gray.200")}>
          Alquila un almacén del tamaño de un contenedor, y nosotros lo llevamos donde lo necesites.
        </Text>
      </Box>
      <Box flex="1" maxW={{ base: "100%", md: "50%" }}>
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuo2MnbFk2uIfARJPCVx8d3W1zRaqVaeBGY6xLcEue3MdhM4XSK4MEKxvsVpoOBycsaE4&usqp=CAU" alt="Almacén Contenedor Personalizado" />
      </Box>
    </Flex>
  );
};

const FeaturesSection = () => {
  return (
    <Stack spacing={5}>
      <Heading as="h3" size="lg">
        Servicios y Comodidades
      </Heading>
      <Flex direction={{ base: "column", md: "row" }} justify="center" align="center" wrap="wrap">
        <FeatureCard icon={<Icon as={FaPlusCircle} w={10} h={10} />} title="Personaliza tu bodega" text="Personaliza tu almacén con estantes, colgadores y más." />
        <FeatureCard icon={<Icon as={FaTruckMoving} w={10} h={10} />} title="Transporte a Domicilio" text="Llevamos el almacén a tu casa u oficina cuando lo necesites." />
        <FeatureCard icon={<Icon as={FaClipboardList} w={10} h={10} />} title="Gestión Sencilla" text="Controla tu inventario fácilmente con nuestra plataforma." />
      </Flex>
    </Stack>
  );
};

const FeatureCard = ({ icon, title, text }) => {
  return (
    <Stack spacing={3} alignItems="center" textAlign="center" m={4}>
      <Box boxSize="16" bg="teal.100" rounded="full" p={3}>
        {icon}
      </Box>
      <Heading as="h4" size="md">
        {title}
      </Heading>
      <Text color={useColorModeValue("gray.600", "gray.200")}>{text}</Text>
    </Stack>
  );
};

const PricingSection = () => {
  return (
    <Box>
      <Heading as="h3" size="lg" mb={6}>
        Precios Transparentes
      </Heading>
      <Text fontSize="lg" mb={4}>
        Tarifa mensual fija más un costo por cada entrega o recogida del almacén.
      </Text>
      <Button colorScheme="green" size="lg" leftIcon={<FaClipboardList />}>
        Ver Planes
      </Button>
    </Box>
  );
};

const CallToActionSection = () => {
  return (
    <Flex direction="column" align="center" justify="center" my={10}>
      <Heading as="h3" size="lg" mb={4}>
        ¿Listo para Simplificar tu Almacenaje?
      </Heading>
      <Button colorScheme="orange" size="lg" rightIcon={<FaPlusCircle />}>
        Empieza Ahora
      </Button>
    </Flex>
  );
};

const Footer = () => {
  return (
    <Flex justifyContent="center" alignItems="center" py={6}>
      <Text fontSize="sm">© 2023 Tu Almacén Personal. Todos los derechos reservados.</Text>
    </Flex>
  );
};

export default Index;
