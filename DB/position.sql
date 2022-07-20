/*
Navicat MySQL Data Transfer

Source Server         : local
Source Server Version : 50625
Source Host           : 127.0.0.1:3306
Source Database       : admin_hr

Target Server Type    : MYSQL
Target Server Version : 50625
File Encoding         : 65001

Date: 2018-07-24 11:13:56
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for position
-- ----------------------------
DROP TABLE IF EXISTS `position`;
CREATE TABLE `position` (
  `id` int(2) NOT NULL AUTO_INCREMENT,
  `position_code` varchar(8) DEFAULT NULL,
  `position_name` varchar(150) DEFAULT NULL,
  `position_type_group` varchar(2) DEFAULT NULL,
  `position_type_group_range` varchar(10) DEFAULT NULL,
  `group_occupation` varchar(2) DEFAULT NULL,
  `government_emp_type` varchar(1) DEFAULT NULL,
  `status_use` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=82 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of position
-- ----------------------------
INSERT INTO `position` VALUES ('1', 'G6_1', 'นักกายภาพบำบัด', 'K', 'K1-K4', 'G6', 'A', 'Y');
INSERT INTO `position` VALUES ('2', 'G6_2', 'นักกิจกรรมบำบัด', 'K', 'K1-K4', 'G6', 'A', 'Y');
INSERT INTO `position` VALUES ('3', 'G6_3', 'นักจิตวิทยา', 'K', 'K1-K4', 'G6', 'A', 'Y');
INSERT INTO `position` VALUES ('4', 'G6_4', 'นักจิตวิทยาคลินิก', 'K', 'K1-K4', 'G6', 'A', 'Y');
INSERT INTO `position` VALUES ('5', 'G6_5', 'ทันตแพทย์', 'K', 'K1-K5', 'G6', 'A', 'Y');
INSERT INTO `position` VALUES ('6', 'G6_6', 'นักเทคนิคการแพทย์', 'K', 'K1-K4', 'G6', 'A', 'Y');
INSERT INTO `position` VALUES ('7', 'G6_7', 'พยาบาลวิชาชีพ', 'K', 'K1-K4', 'G6', 'A', 'Y');
INSERT INTO `position` VALUES ('8', 'G6_8', 'นายแพทย์', 'K', 'K1-K5', 'G6', 'A', 'Y');
INSERT INTO `position` VALUES ('9', 'G6_9', 'นักการแพทย์แผนไทย', 'K', 'K1-K3', 'G6', 'A', 'Y');
INSERT INTO `position` VALUES ('10', 'G6_10', 'เภสัชกร', 'K', 'K1-K4', 'G6', 'A', 'Y');
INSERT INTO `position` VALUES ('11', 'G6_11', 'นักโภชนาการ', 'K', 'K1-K4', 'G6', 'A', 'Y');
INSERT INTO `position` VALUES ('12', 'G6_12', 'นักรังสีการแพทย์', 'K', 'K1-K4', 'G6', 'A', 'Y');
INSERT INTO `position` VALUES ('13', 'G6_13', 'นักวิชาการพยาบาล', 'K', 'K1-K4', 'G6', 'A', 'Y');
INSERT INTO `position` VALUES ('14', 'G6_14', 'นักวิชาการสาธารณสุข', 'K', 'K1-K5', 'G6', 'A', 'Y');
INSERT INTO `position` VALUES ('15', 'G6_15', 'นักอาชีวบำบัด', 'K', 'K1-K3', 'G6', 'A', 'Y');
INSERT INTO `position` VALUES ('16', 'G6_16', 'นักวิชาการอาหารและยา', 'K', 'K1-K5', 'G6', 'A', 'Y');
INSERT INTO `position` VALUES ('17', 'G6_17', 'นักวิทยาศาสตร์การแพทย์', 'K', 'K1-K5', 'G6', 'A', 'Y');
INSERT INTO `position` VALUES ('18', 'G6_18', 'นักเวชศาสตร์การสื่อความหมาย', 'K', 'K1-K3', 'G6', 'A', 'Y');
INSERT INTO `position` VALUES ('19', 'G1_19', 'นักบริหาร', 'S', 'S1-S2', 'G1', 'A', 'Y');
INSERT INTO `position` VALUES ('20', 'G1_20', 'ผู้ตรวจราชการกระทรวง', 'S', 'S2', 'G1', 'A', 'Y');
INSERT INTO `position` VALUES ('21', 'G1_21', 'ผู้อำนวยการ', 'M', 'M1-M2', 'G1', 'A', 'Y');
INSERT INTO `position` VALUES ('22', 'G1_22', 'ผู้อำนวยการเฉพาะด้าน(แพทย์)', 'M', 'M1-M2', 'G1', 'A', 'Y');
INSERT INTO `position` VALUES ('23', 'G1_23', 'ผู้ตรวจราชการกรม', 'M', 'M2', 'G1', 'A', 'Y');
INSERT INTO `position` VALUES ('24', 'G1_24', 'นักจัดการงานทั่วไป', 'K', 'K1-K3', 'G1', 'A', 'Y');
INSERT INTO `position` VALUES ('25', 'G1_25', 'นักทรัพยากรบุคคล', 'K', 'K1-K5', 'G1', 'A', 'Y');
INSERT INTO `position` VALUES ('26', 'G1_26', 'นิติกร', 'K', 'K1-K5', 'G1', 'A', 'Y');
INSERT INTO `position` VALUES ('27', 'G1_27', 'นักวิเคราะห์นโยบายและแผน', 'K', 'K1-K5', 'G1', 'A', 'Y');
INSERT INTO `position` VALUES ('28', 'G1_28', 'นักวิชาการคอมพิวเตอร์', 'K', 'K1-K5', 'G1', 'A', 'Y');
INSERT INTO `position` VALUES ('29', 'G1_29', 'นักเทคโนโลยีสารสนเทศ', 'K', 'K1-K4', 'G1', 'A', 'Y');
INSERT INTO `position` VALUES ('30', 'G1_30', 'นักวิชาการพัสดุ', 'K', 'K1-K3', 'G1', 'A', 'Y');
INSERT INTO `position` VALUES ('31', 'G1_31', 'นักวิชาการสถิติ', 'K', 'K1-K4', 'G1', 'A', 'Y');
INSERT INTO `position` VALUES ('32', 'G2_32', 'นักวิชาการเงินและบัญชี', 'K', 'K1-K4', 'G2', 'A', 'Y');
INSERT INTO `position` VALUES ('33', 'G3_33', 'นักประชาสัมพันธ์', 'K', 'K1-K4', 'G3', 'A', 'Y');
INSERT INTO `position` VALUES ('34', 'G3_34', 'นักวิชาการเผยแพร่', 'K', 'K1-K3', 'G3', 'A', 'Y');
INSERT INTO `position` VALUES ('35', 'G3_35', 'นักวิชาการโสตทัศนศึกษา', 'K', 'K1-K3', 'G3', 'A', 'Y');
INSERT INTO `position` VALUES ('36', 'G8_36', 'บรรณารักษ์', 'K', 'K1-K3', 'G8', 'A', 'Y');
INSERT INTO `position` VALUES ('37', 'G8_37', 'นักวิชาการศึกษา', 'K', 'K1-K5', 'G8', 'A', 'Y');
INSERT INTO `position` VALUES ('38', 'G8_38', 'นักสังคมสงเคราะห์', 'K', 'K1-K4', 'G8', 'A', 'Y');
INSERT INTO `position` VALUES ('39', 'G1_39', 'เจ้าพนักงานธุรการ', 'O', 'O1-O3', 'G1', 'A', 'Y');
INSERT INTO `position` VALUES ('40', 'G1_40', 'เจ้าพนักงานพัสดุ', 'O', 'O1-O3', 'G1', 'A', 'Y');
INSERT INTO `position` VALUES ('41', 'G1_41', 'เจ้าพนักงานเวชสถิติ', 'O', 'O1-O3', 'G1', 'A', 'Y');
INSERT INTO `position` VALUES ('42', 'G1_42', 'เจ้าพนักงานสถิติ', 'O', 'O1-O3', 'G1', 'A', 'Y');
INSERT INTO `position` VALUES ('43', 'G2_43', 'เจ้าพนักงานการเงินและบัญชี', 'O', 'O1-O3', 'G2', 'A', 'Y');
INSERT INTO `position` VALUES ('44', 'G3_44', 'เจ้าพนักงานเผยแพร่ประชาสัมพันธ์', 'O', 'O1-O3', 'G3', 'A', 'Y');
INSERT INTO `position` VALUES ('45', 'G3_45', 'เจ้าพนักงานโสตทัศนศึกษา', 'O', 'O1-O3', 'G3', 'A', 'Y');
INSERT INTO `position` VALUES ('46', 'G6_46', 'เจ้าพนักงานทันตสาธารณสุข', 'O', 'O1-O2', 'G6', 'A', 'Y');
INSERT INTO `position` VALUES ('47', 'G6_47', 'เจ้าพนักงานเภสัชกรรม', 'O', 'O1-O2', 'G6', 'A', 'Y');
INSERT INTO `position` VALUES ('48', 'G6_48', 'โภชนากร', 'O', 'O1-O3', 'G6', 'A', 'Y');
INSERT INTO `position` VALUES ('49', 'G6_49', 'เจ้าพนักงานรังสีการแพทย์', 'O', 'O1-O2', 'G6', 'A', 'Y');
INSERT INTO `position` VALUES ('50', 'G6_50', 'เจ้าพนักงานวิทยาศาสตร์การแพทย์', 'O', 'O1-O2', 'G6', 'A', 'Y');
INSERT INTO `position` VALUES ('51', 'G6_51', 'เจ้าพนักงานเวชกรรมฟื้นฟู', 'O', 'O1-O2', 'G6', 'A', 'Y');
INSERT INTO `position` VALUES ('52', 'G6_52', 'เจ้าพนักงานสาธารณสุข', 'O', 'O1-O3', 'G6', 'A', 'Y');
INSERT INTO `position` VALUES ('53', 'G6_53', 'เจ้าพนักงานอาชีวบำบัด', 'O', 'O1-O2', 'G6', 'A', 'Y');
INSERT INTO `position` VALUES ('54', 'G6_54', 'พยาบาลเทคนิค', 'O', 'O1-O2', 'G6', 'A', 'Y');
INSERT INTO `position` VALUES ('55', 'G7_55', 'เจ้าพนักงานเครื่องคอมพิวเตอร์', 'O', 'O1-O3', 'G7', 'A', 'Y');
INSERT INTO `position` VALUES ('56', 'G7_56', 'นายช่างเทคนิค', 'O', 'O1-O3', 'G7', 'A', 'Y');
INSERT INTO `position` VALUES ('57', 'G7_57', 'นายช่างไฟฟ้า', 'O', 'O1-O3', 'G7', 'A', 'Y');
INSERT INTO `position` VALUES ('58', '58', 'พนักงานพิมพ์', null, null, null, null, 'Y');
INSERT INTO `position` VALUES ('59', '59', 'พนักงานพัสดุ', null, null, null, null, 'Y');
INSERT INTO `position` VALUES ('60', '60', 'พนักงานประจำห้องยา', null, null, null, null, 'Y');
INSERT INTO `position` VALUES ('61', '61', 'พนักงานบัตรรายงานโรค', null, null, null, null, 'Y');
INSERT INTO `position` VALUES ('62', '62', 'พนักงานบริการเอกสารทั่วไป', null, null, null, null, 'Y');
INSERT INTO `position` VALUES ('63', '63', 'พนักงานบริการ', null, null, null, null, 'Y');
INSERT INTO `position` VALUES ('64', '64', 'พนักงานช่วยเหลือคนไข้', null, null, null, null, 'Y');
INSERT INTO `position` VALUES ('65', '65', 'พนักงานการแพทย์และรังสีเทคนิค', null, null, null, null, 'Y');
INSERT INTO `position` VALUES ('66', '66', 'พนักงานประจำตึก', null, null, null, null, 'Y');
INSERT INTO `position` VALUES ('67', '67', 'พนักงานขับรถยนต์', null, null, null, null, 'Y');
INSERT INTO `position` VALUES ('68', '68', 'ช่างสี', null, null, null, null, 'Y');
INSERT INTO `position` VALUES ('69', '69', 'ช่างไม้', null, null, null, null, 'Y');
INSERT INTO `position` VALUES ('70', '70', 'พนักงานกายภาพบำบัด', null, null, null, null, 'Y');
INSERT INTO `position` VALUES ('71', '71', 'ผู้ช่วยพยาบาล', null, null, null, null, 'Y');
INSERT INTO `position` VALUES ('72', '72', 'พนักงานสถิติ', null, null, null, null, 'Y');
INSERT INTO `position` VALUES ('73', '73', 'ผู้ช่วยทันตแพทย์', null, null, null, null, 'Y');
INSERT INTO `position` VALUES ('74', '74', 'พนักงานอาชีวบำบัด', null, null, null, null, 'Y');
INSERT INTO `position` VALUES ('75', '75', 'พนักงานปฏิบัติการชันสูตรโรค', null, null, null, null, 'Y');
INSERT INTO `position` VALUES ('76', '76', 'ช่างเชื่อม', null, null, null, null, 'Y');
INSERT INTO `position` VALUES ('77', '77', 'พนักงานการเงินและบัญชี', null, null, null, null, 'Y');
INSERT INTO `position` VALUES ('78', '78', 'พนักงานประกอบอาหาร', null, null, null, null, 'Y');
INSERT INTO `position` VALUES ('79', '79', 'พนักงานธุรการ', null, null, null, null, 'Y');
INSERT INTO `position` VALUES ('80', '80', 'ผู้ช่วยช่างทั่วไป', null, null, null, null, 'Y');
INSERT INTO `position` VALUES ('81', '81', 'เจ้าพนักงานสาธารณสุขชุมชน', null, null, null, null, 'Y');
