package com.esme.spring.faircorp.model;

import java.util.List;

public interface RoomDaoCustom {
    List<Room> FindRoomByName(String name);
    List<Room> FindRoomByBuilding(Building building);
}
