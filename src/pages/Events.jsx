import React, { useState } from 'react';
import { Box, Heading, Text, VStack, Spinner, Container, Button, Input, Textarea, FormControl, FormLabel } from '@chakra-ui/react';
import { useEvents, useAddEvent, useUpdateEvent, useDeleteEvent } from '../integrations/supabase/index.js';

const Events = () => {
  const { data: events, error, isLoading } = useEvents();

  const addEvent = useAddEvent();
  const updateEvent = useUpdateEvent();
  const deleteEvent = useDeleteEvent();

  const [newEvent, setNewEvent] = useState({ name: '', date: '', description: '' });
  const [editingEvent, setEditingEvent] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleAddEvent = () => {
    addEvent.mutate(newEvent);
    setNewEvent({ name: '', date: '', description: '' });
  };

  const handleUpdateEvent = () => {
    updateEvent.mutate(editingEvent);
    setEditingEvent(null);
  };

  const handleDeleteEvent = (id) => {
    deleteEvent.mutate(id);
  };

  if (isLoading) {
    return (
      <Container centerContent>
        <Spinner size="xl" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container centerContent>
        <Text color="red.500">Failed to load events: {error.message}</Text>
      </Container>
    );
  }

  return (
    <Container maxW="container.md" py={8} bg="gray.50">
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="xl" textAlign="center" color="black">Events</Heading>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" bg="white">
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input name="name" value={newEvent.name} onChange={handleInputChange} />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Date</FormLabel>
            <Input type="date" name="date" value={newEvent.date} onChange={handleInputChange} />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Description</FormLabel>
            <Textarea name="description" value={newEvent.description} onChange={handleInputChange} />
          </FormControl>
          <Button mt={4} colorScheme="blue" onClick={handleAddEvent}>Add Event</Button>
        </Box>
        {events.length === 0 ? (
          <Text>No events available.</Text>
        ) : (
          events.map(event => (
            <Box key={event.id} p={5} shadow="md" borderWidth="1px" borderRadius="md" bg="white">
              {editingEvent && editingEvent.id === event.id ? (
                <>
                  <FormControl>
                    <FormLabel>Name</FormLabel>
                    <Input name="name" value={editingEvent.name} onChange={(e) => setEditingEvent({ ...editingEvent, name: e.target.value })} />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Date</FormLabel>
                    <Input type="date" name="date" value={editingEvent.date} onChange={(e) => setEditingEvent({ ...editingEvent, date: e.target.value })} />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Description</FormLabel>
                    <Textarea name="description" value={editingEvent.description} onChange={(e) => setEditingEvent({ ...editingEvent, description: e.target.value })} />
                  </FormControl>
                  <Button mt={4} colorScheme="green" onClick={handleUpdateEvent}>Update Event</Button>
                  <Button mt={4} colorScheme="red" onClick={() => setEditingEvent(null)}>Cancel</Button>
                </>
              ) : (
                <>
                  <Heading fontSize="xl" color="black">{event.name}</Heading>
                  <Text mt={4} color="gray.700">{event.description}</Text>
                  <Text mt={2} color="gray.500">{new Date(event.date).toLocaleDateString()}</Text>
                  <Button mt={4} colorScheme="yellow" onClick={() => setEditingEvent(event)}>Edit</Button>
                  <Button mt={4} colorScheme="red" onClick={() => handleDeleteEvent(event.id)}>Delete</Button>
                </>
              )}
            </Box>
          ))
        )}
      </VStack>
    </Container>
  );
};

export default Events;