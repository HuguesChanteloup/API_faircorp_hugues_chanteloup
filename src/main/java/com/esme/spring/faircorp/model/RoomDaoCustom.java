package com.esme.spring.faircorp.model;

public interface RoomDaoCustom {
    Room FindRoomByName(String name);
    List<Room> FindRoomByBuilding(Building building);
}
