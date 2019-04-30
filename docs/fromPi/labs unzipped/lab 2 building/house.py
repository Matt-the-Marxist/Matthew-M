from mcpi.minecraft import Minecraft

mc=Minecraft.create()

pos = mc.player.getTilePos()

mc.setBlocks(pos.x-1,pos.y-1,pos.z-1, pos.x+1,pos.y+2,pos.z+1,5)
mc.setBlocks(pos.x,pos.y,pos.z, pos.x,pos.y+1,pos.z,0)
