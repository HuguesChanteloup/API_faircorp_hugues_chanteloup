package com.esme.spring.faircorp.model;

import java.util.List;

public interface RoomDaoCustom {
    Room FindRoomByName(String name);
    List<Room> FindRoomByBuilding(Building building);
}
